import './qualification.css';


function Qualification(props){
    return(
        <div className="qual">
            <h2>qualification</h2>
            <table className="table1">
            <tr><td><div className="school">SCHOOL :{props.school}</div></td></tr>
            <tr><td><div className="cgpa">CGPA :{props.cgpa}</div></td></tr>
            <tr><td><div className="ug">COLLEGE :{props.ug}</div></td></tr>
            <tr><td><div className="percentage">percentage :{props.percentage}</div></td></tr>
           <tr><td><div className="pg">POST-COLLEGE :{props.pg}</div></td></tr>
           <tr><td><div className="cgpapg">cgpa :{props.cgpapg}</div></td></tr>
        
        </table>
        </div>
    )
}
export default Qualification;