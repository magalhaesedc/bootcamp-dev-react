export default function Test(props) {
  console.log(props);
  return <div>Teste</div>;
}

//Exemplos de uso de props
/* <Test
  number={12}
  string="Edson"
  visible
  data={{ a: 1, b: 2, c: 3 }}
  onClink={() => console.log("Test Function")}
/> */
