import { useParams } from "react-router-dom";

function Details() {

 const { id } = useParams();
 console.log(id);
 
 return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
}

export default Details;