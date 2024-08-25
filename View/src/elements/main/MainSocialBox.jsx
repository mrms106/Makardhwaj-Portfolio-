import SocialBox from "./socialBox"
export default function ScoialMainBox(){
    return(
        <>
            <SocialBox
              link="https://github.com/mrms106"
              socialClass="f sociali"
              icon={<i className="fa-brands fa-github"></i>}
             />
              <SocialBox
              link="https://twitter.com/"
              socialClass="t sociali"
              icon={<i className="fa-brands fa-x-twitter"></i>}
             />
              <SocialBox
              link="https://www.instagram.com/mr.ms_106/"
              socialClass="i sociali"
              icon={<i className="fa-brands fa-instagram"></i>}
             />
              <SocialBox
              link="https://www.linkedin.com/in/makardhwaj-surwase-0a34b827b/"
              socialClass="l sociali"
              icon={<i className="fa-brands fa-linkedin"></i>}
             />

        </>
    )
}