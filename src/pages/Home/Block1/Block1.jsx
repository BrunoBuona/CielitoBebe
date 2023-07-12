import './Block1.css'
import picture from '../../../assets/she.png'
export default function Block1() {
    return (
        <>
            <div className="block1-content">
                <main className="block1-main background-block1">
                    <div className='block1-column-1' style={{paddingTop:'5vh'}}>
                        <div style={{paddingLeft:'10vw'}}>
                        <h2 style={{fontSize:'18px',textTransform:'uppercase',textAlign:'left',color:'red',fontWeight:'600'}}>Logro Desbloqueado</h2>
                        <h1 style={{fontSize:'72px',textTransform:'uppercase',textAlign:'left',fontWeight:'900',color:'#393939'}}>CIELITO BEBÉ</h1>
                        <p>Alternative model from&nbsp;
                        <span style={{letterSpacing: "0px"}}>Buenos Aires - Argentina</span>
                        <br />
                        <span style={{letterSpacing: "0px"}}>Influencer social media, and webcamer performer.</span></p>
                        <div style={{height:'10vh'}}>
                        <button className='btn-block1'>VER MI LISTA DE VIDEOS COMPLETA</button>
                        </div>
                        </div>
                    </div>
                    <div className='block1-column-2' style={{paddingTop:'12.1vh'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingRight:'11.3vw'}}>
                            <img src={picture} style={{height:'72%'}} alt="Foto de Cielito BB" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}