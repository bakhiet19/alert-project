import { MdCancel } from "react-icons/md"
import { AlertTypes } from "./type"
import { ReactNode } from "react"

interface Iprops{
  type : AlertTypes,
  header : string,
  title : string,
  children : ReactNode,

}


const Alert = ({type , header , title , children} : Iprops) => {
  return (
    <div className={`${type}`}>
      <div className={`${header}`}>
        <div className="title">
        <h3>{children}</h3>
        <h4>{title}</h4>
        </div>
          <MdCancel className="cancel"/>
      </div>
      
      
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, qui. Consequuntur, 
        obcaecati accusamus quos quibusdam quisquam debitis neque esse error?</p>
    </div>
  )
}

export default Alert