import Layout from '../components/Layout'
import ImageRound from '../components/ImageRound'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import benny from '../images/benny.jpg'

const Index = () => {

    return (
        <div className="content">
            <h1>Benjamin Killer</h1>
            <ImageRound src={benny} alt="Benjamin Killer" />
            <div className="icons">
                <a className="link" target="_blank" href="https://www.linkedin.com/in/benjamin-killer">
                    <LinkedInIcon fontSize="large"/>
                </a>
            </div>
            <style jsx>{`
                .content {
                    display: flex;
                    flex: 1 1 auto;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                }
                .link {
                    color: black;
                    text-decoration: none;
                    width: 2em;
                    height: 100px;
                }
                .link:hover {
                    color: #0077b5;
                }
                .icons {
                    margin-top: 20px;
                }

            `}</style>
        </div>
    )
}

export default Layout(Index)