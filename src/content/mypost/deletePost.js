import axios from "axios";

function deletePost(val) {
  var confrim = window.confirm("Are you sure to delete");
  if (confrim) {
    var endpoint = "https://62299094be12fc4538a1a26a.mockapi.io/message/" + val;
    axios.delete(endpoint);
  }
}
export default deletePost;
