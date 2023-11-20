import './assets/fonts/charte_fonts.css'
import './charte.css'

function Charte(){
    return(
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><a href="">Acceuil</a></li>
                            <li><a href="">Liens utils</a></li>
                            <li><a href="">Liens utils</a></li>
                            <li><a className='adherer' href="">ADHERER</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section id="news">
                <div className='container'>
                    <div className="title">assurance chomage : la cfe-cgc ne signera pas cette nouvelle convention</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium natus beatae! Consectetur ratione repudiandae quo quidem, sint cupiditate tempora deleniti optio facere saepe officiis, velit, dolore ad possimus nam.</div>
                    <a href=""><span className="icon-small-arrow actu-enhance-suite"></span>Lire la suite</a>
                </div>    
            </section>
            <section id="presentation">
                <div className='container'>
                    <div className="title">la cfe-cgc, <span>en quelques mots</span></div>
                    <span className="icon-petite-vague"></span>
                    <div className="text">Au quotidien, au niveau national comme dans les territoires, la CFE-CGC - syndicat des cadres, techniciens, agents de maîtrise et des fonctions publiques - négocie, signe des accords et obtient de nouveaux droits pour les salariés…</div>
                </div>    
            </section>
            <footer>
                <div className="footer_top">

                </div>
                <div className="footer_bottom">

                </div>
            </footer>
        </>
    )
}

export default Charte