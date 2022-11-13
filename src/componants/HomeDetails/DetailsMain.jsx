
import { Box } from "@chakra-ui/react";
import { DetailsCard } from "../Home/MiniCard/DetailsCard";
import { CastData, RelatedData, SeasonData } from "../Home/Data/DetailsData";
import { RelatedCard } from "../Home/MiniCard/RelatedCard";
import { DetailsFooter } from "./DetailsFooter";

export const DetailsMain = () => {

    return(
        <>

        <div className="DetailsBox">

        <Box top="30px" mt={90} id="boxIs" >
            <DetailsCard 

                data={SeasonData}
                title={"SEASON 1"}
                minititle={"Add to your Up Next watchlist today."}
            />
        </Box>
        </div>

        <div className="trailerBox">
            <h1 className="Head">Trailers</h1>
            <div>
                <img src="https://is4-ssl.mzstatic.com/image/thumb/MyAuxYfuNZeytIiPf5PhiQ/1000x563.webp" alt="" height="100%" width="100%" />
            </div>
        </div>

        <hr />

        <Box top="30px" mt={90} >

            <h1 className="HeadRel">Related</h1>
            <RelatedCard

                data={RelatedData}
            />
        </Box>

        <hr />

        <div className="trailerBox">

            <h1 className="Head">Cast & Crew</h1>

            <div className="CastBox">
                <div>
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/nQFFovdeUTTXH3TbXbz_KQ/492x492bb.webp" alt="" />
                </div>
                <div>
                    <img src="https://is2-ssl.mzstatic.com/image/thumb/CUR1hHL_Tea1n0Jpfxz_kw/492x492bb.webp" alt="" />
                </div>
                <div>
                    <img src="https://is4-ssl.mzstatic.com/image/thumb/kTEKRpv_3ghSGA7ajSciiQ/492x492bb.webp" alt="" />
                </div>

                <div>
                    <img src="https://is4-ssl.mzstatic.com/image/thumb/vzz8NxN-sV5KUAxlFa-B7A/492x492bb.webp" alt="" />
                </div>

                <div>
                    <img src="https://is5-ssl.mzstatic.com/image/thumb/FFVfIP6QoZ8bSWU6UsCtVA/492x492bb.webp" alt="" />
                </div>
                
                <div>
                    <img src="https://is2-ssl.mzstatic.com/image/thumb/NOGi7wJKPKYXGe54sLrGXQ/492x492ve.webp" alt="" />
                </div>
            </div>
            
        </div>

        <hr />

        <div className="trailerBox">
            <h1 className="Head">How To Watch</h1>
            <div>
                <img src="https://document-export.canva.com/dVkjw/DAFRXpdVkjw/9/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221112T123430Z&X-Amz-Expires=89034&X-Amz-Signature=cb0c809db288a677cb41ff3576ee73de68a94a0fb67f12941b8c48ae6dd328af&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2013%20Nov%202022%2013%3A18%3A24%20GMT" alt="" height="100%" width="100%" />
            </div>
        </div>

        


         <DetailsFooter />


        
        </>
    )
}