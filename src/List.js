function List(props) {
 
  return (
    <div className='d-flex'>
         { props.students.map((nam,id)=>{

           return  props.students.length > 1 ?
            ((props.students[props.students.indexOf(nam)-1]).charAt(0) === 
             (props.students[props.students.indexOf(nam)]).charAt(0) ?
                  (<p>{nam}</p>) 
                  :
                  (<p>{nam}</p>))
           :
           (<p>{nam}</p>);
          })  
        }
        

        {/* {
            props.students.map((nam,id)=>{
            return  props.students.length > 0 ?
            (props.students[props.students.length-1].charAt(0) === nam.charAt(0) ? 
                    (<h2 key={id}> {nam} </h2>):(<><h2 key={id}> {nam} </h2></>) ):
             (<h2 key={id}> {nam} </h2>)
             ;
             
            })
        } */}

    </div>
  )
}

export default List