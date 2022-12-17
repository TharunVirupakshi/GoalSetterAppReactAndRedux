import './Spinner.css'

function Spinner() {

  const style = {
    display: "flex",
    justifyContent: "center"}
  return (
    <> 
      <div className="SpinnerConatiner" style={style}>
          <div className="loadingSpinner"></div>
      </div>
    </>
   
  )
}

export default Spinner
