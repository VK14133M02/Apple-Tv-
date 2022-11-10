import "./style.css";
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div id="navbar">
            <img src="https://document-export.canva.com/dVkjw/DAFRXpdVkjw/9/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221109T123430Z&X-Amz-Expires=67434&X-Amz-Signature=db10d8847c29b2e710b65e60cdda1f7e1b8845646aab2eae7ddbec1329a0631c&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2010%20Nov%202022%2007%3A18%3A24%20GMT" alt="" />
            <div>
                <input type="text" placeholder="Search" />
                <button>Sign in</button>
            </div>
        </div>
    );
}

export default Navbar;