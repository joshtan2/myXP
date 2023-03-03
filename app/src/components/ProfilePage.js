import React from 'react';

export default function ProfilePage(props) {

    return (
        <div className="container">
            {/* <HeaderCard /> */}
            {/* <div className='d-flex m-4 justify-content-center'>
                <a className="btn" href="#" role="button">Games</a>
                <a className="btn" href="#" role="button">Experience</a>
            </div> */}
            <div className='row'>
                <div className='col-4'>
                    <InfoCard />
                </div>
                <div className='col'>
                    {/* <ExperienceCard /> */}
                </div>
            </div>

            {/* <GamesCard /> */}
        </div>
    )
}

function HeaderCard(props) {
    return (
        <div className='mt-5 mx-5'>
            <div className="d-flex flex-column justify-content-center bg-white card border-light profile-card">
                <img src='pics/profilebackground.png' className='position-relative profile-background' />
                <div className='gamer-tag'>
                    <p>Horse_egg</p>
                </div>
                <div className='card-body card-body-height'>
                    <img src='pics/alexpic.png' className='card-img mx-auto profile-img'></img>
                </div>
                <div className='status'>I like dumb stuff lol</div>
            </div>
        </div>
    )
}

function GamesCard(props) {
    return (
        <div className='mx-5 px-0'>
            <div className='bg-white card border-light profile-card'>
                <a className="btn btn-dark my-5 mx-5" href="#" role="button">some placeholder cool button before i set up the actual button thing lol</a>


                <div className='d-flex mx-5 mt-2 mb-0 justify-content-between'>
                    <h4 className='experience-header'>SOLO</h4>
                    <p>4,154 Matches</p>
                </div>
                <div className='mt-0 p-0'>
                    <hr className='mt-0 mx-5' />
                </div>
                {/* this is all solo stats */}
                <div className="d-flex row stat-cluster text-center">
                    <div className="col-2 card m-3 border-light stat-card">
                        <div className="card-body">
                            <h5 className="card-title">WINS</h5>
                            <p className="card-text stat-number">3,700</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>

                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Win%</h5>
                            <p className="card-text stat-number">89.1%</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                </div>




                <div className='d-flex mx-5 mt-5 mb-0 justify-content-between'>
                    <h4 className='experience-header'>DUO</h4>
                    <p>4,154 Matches</p>
                </div>
                <div className='mt-0 p-0'>
                    <hr className='mt-0 mx-5' />
                </div>
                {/* this is all solo stats */}
                <div className="d-flex row stat-cluster text-center">
                    <div className="col-2 card m-3 border-light stat-card">
                        <div className="card-body">
                            <h5 className="card-title">WINS</h5>
                            <p className="card-text stat-number">3,700</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>

                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Win%</h5>
                            <p className="card-text stat-number">89.1%</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function ExperienceCard(props) {
    return (
        <div className='bg-white card info-card border-light profile-card'>
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h1 className='header-text'>Experience</h1>
                    {/* <p>EDIT</p> */}
                </div>
                <hr />
                {/* Experience */}
                <div className="d-flex row stat-cluster">
                    <div className="experience-box">
                        <h5>Sentinels Valorant IGL</h5>
                        <h6>Dec 2019 - Present</h6>
                        <p></p>
                    </div>
                </div>

                <div className='d-flex mx-5 mt-5 mb-0 justify-content-between'>
                    <h4 className='experience-header'>Tournament History</h4>
                </div>
                <div className='mt-0 p-0'>
                    <hr className='mt-0 mx-5' />
                </div>
                {/* Tournament History */}
                <div className="d-flex row stat-cluster text-center">

                </div>

                <div className='d-flex mx-5 mt-5 mb-0 justify-content-between'>
                    <h4 className='experience-header'>Education</h4>
                </div>
                <div className='mt-0 p-0'>
                    <hr className='mt-0 mx-5' />
                </div>
                {/* Education */}
                <div className="d-flex row stat-cluster text-center">

                </div>
            </div>
        </div>
    )
}

function InfoCard(props) {
    return (
        <div class="card info-card border-0"   >
            <div class="card-body">
                <h1 class="card-title header-text">Card title</h1>
                <hr />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}
