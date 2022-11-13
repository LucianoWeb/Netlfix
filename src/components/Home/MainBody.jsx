import React from 'react';
import Download from '../../assets/Download.jpg';
import '../../styles/MainBody.css';
import stranger from '../../assets/stranger.jpg';
import kids from '../../assets/kids.png';
import tv from '../../assets/tv.png';
import video1 from '../../assets/video-net.mp4';
import video2 from '../../assets/video-net2.mp4';
import watch from '../../assets/watch.png';
import spiner from '../../assets/spiner.gif';
import { FormattedMessage } from 'react-intl';

const MainBody = () => {
    return (
        <>
            <div className='border-main border-main-rev border-lg'>
                <div className='text-main'>
                    <h3><FormattedMessage id='main.enjoy'/></h3>
                    <h5><FormattedMessage id='main.enjoyp'/></h5>
                </div>
                <div className='img-main'>
                    <img src={tv} className='img' alt="Stranger things" />
                    
                    <video src={video1} className='video1' autoPlay={true} muted={true} loop={true}></video>
                </div>

            </div>
            <div className='border-main border-lg'>
                <div className='img-main'>
                    <img src={Download} className='img' alt="Stranger things" />
                    <div className="downloading">
                        <div className='d-flex justify-content-center gap-3 align-items-center'>
                            <img src={stranger} alt="stranger things" />
                            <p>Stranger Things <br /><span><FormattedMessage id='main.spinner'/></span></p>
                        </div>
                        <img src={spiner} className="spiner" alt="downloading" />

                    </div>
                </div>
                <div className='text-main'>
                    <h3><FormattedMessage id='main.download'/></h3>
                    <h5><FormattedMessage id='main.downloadp'/></h5>
                </div>
            </div>
            <div className='border-main border-main-rev border-lg'>
                <div className='text-main'>
                    <h3><FormattedMessage id='main.watch'/></h3>
                    <h5><FormattedMessage id='main.watchp'/></h5>
                </div>
                <div className='img-main'>
                    <img src={watch} className='img' alt="Stranger things" />
                    <video src={video2} className='video2' autoPlay={true} muted={true} loop={true}></video>
                </div>
            </div>
            <div className='border-main border-lg border-bot'>
                <div className='img-main'>
                    <img src={kids} className='img' alt="Stranger things" />
                </div>
                <div className='text-main'>
                    <h3><FormattedMessage id='main.kids'/></h3>
                    <h5><FormattedMessage id='main.kidsp'/></h5>
                </div>
            </div>
        </>
    );
}

export default MainBody;