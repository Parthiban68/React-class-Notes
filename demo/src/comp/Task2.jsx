

export default function Task2(props) {


    const change =()=>{
        // if (props.name == "on"){
        //    props.setName("off")
        // }else{
        //     props.setName("on")
        // }
        // const x = props.name === "ON" ? props.setName("OFF"): props.setName("ON")

        props.setName(!props.name)
    }
  return (
    <>
    <h1>{props.name ? "on" : "off"}</h1>
    <button onClick={change}>Toggle</button>
    </>
    
  )
}
