/*created by Pranav Gupta(pg07codes) on 5/12/18*/

import React from 'react'
import AddStudentForm from './AddStudentForm'
import StudentGroup from './StudentGroup'
import SearchResults from './SearchResults'

class Home extends React.Component{
    state={
        students:[],
        batchYears:[],
        courses:[],
        sortToggle:true,
        searchTerm:'',
        filteredStudents:[]
    }

    getStudentsByCourse=(course)=>{
        let temp=[...this.state.students]
        temp=temp.filter((s)=> ((s.studentProfDetail.course===course)?true:false))
        return temp
    }

    getStudentsByYear=(Year)=>{
        let temp=[...this.state.students]
        temp=temp.filter((s)=> ((s.studentProfDetail.batchYear===Year)?true:false))
        return temp
    }
    handleSearch=(e)=>{
        this.setState({searchTerm:e.target.value})
        if(this.state.searchTerm===''){
            this.setState({filteredStudents:[]})
        }
        let items=[...this.state.students]
        let re=new RegExp(`\\s*${e.target.value}\\s*`,'gi')
        items=items.filter(e=>{
            return e.studentProfDetail.company.match(re) !== null;
        })
        this.setState({filteredStudents:items})
    }



    componentDidMount(){
        fetch('http://localhost:8888/getAllStudents')
            .then(res=>res.json())
            .then(res=>{
                console.log('data fetched')

                // finding unique courses and batches...

                const courses = [...new Set(res.map(e=>e.studentProfDetail.course))]
                const batchYears = [...new Set(res.map(e=>e.studentProfDetail.batchYear))]

                this.setState({
                    students:res,
                    courses:courses,
                    batchYears:batchYears
                })
            })
            .catch(e=>{
                console.log(e);
            })
    }

    render(){

        let GroupByCourse=this.state.courses.map((c)=>{
            return(
                <StudentGroup course={c} students={this.getStudentsByCourse(c)}/>
            )
        })

        let toggleSortCourse=()=>{
            this.setState({
                sortToggle:true
            })
        }
        let toggleSortYear=()=>{
            this.setState({
                sortToggle:false
            })
        }
        let GroupByYear=this.state.batchYears.map((y)=>{
            return(
                <StudentGroup year={y} students={this.getStudentsByYear(y)}/>
            )
        })

        return(
            <div>
                <div className="container">

                    {/*sorting buttons*/}

                    <div className="row justify-content-around mt-3 mb-3">
                        <div className="col-md-5 col-sm-6 m-2">
                            <button onClick={toggleSortCourse} type="button" className="btn btn-outline-dark">SORT STUDENTS BY COURSES</button>
                        </div>
                        <div className="col-md-5 col-sm-6 m-2">
                            <button onClick={toggleSortYear} type="button" className="btn btn-outline-dark">SORT STUDENTS BY BATCHYEAR</button>
                        </div>
                    </div>


                    {/*searchbyCOmpany*/}

                    <form className='mt-5'>
                        <div className="form-group">
                            <input onChange={this.handleSearch} type="text" className="form-control" id="search" placeholder="search by company"/>
                        </div>
                    </form>

                </div>
                {this.state.searchTerm===''?this.state.sortToggle?GroupByCourse:GroupByYear:<SearchResults students={this.state.filteredStudents}/>}

            </div>
        )
    }

}

export default Home