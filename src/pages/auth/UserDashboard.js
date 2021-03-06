import React from 'react';


function UserDashboard(props) {
    return (
        <div>
               <nav>
            <div class="ab-nav-item">
                <a href="">Home</a>
            </div>
            <div class="ab-nav-item">
                <a href="">Résumé</a>
            </div>
            <div class="ab-nav-social">
                <div class="ab-nav-item">
                    <a href=""><i class="fab fa-github"></i></a>
                </div>
                <div class="ab-nav-item">
                    <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
                <div class="ab-nav-item">
                    <a href=""><i class="fab fa-twitter"></i></a>
                </div>
                <div class="ab-nav-item">
                    <a href=""><i class="fab fa-pinterest"></i></a>
                </div>
            </div>
        </nav>


        <div class="ab-background"></div>




     
        <main>
            <img class="ab-profile-pic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="ok"/>

            <div class="ab-content">

                <div class="ab-person-details">
                    <h1>Anabel Lastname</h1>
                    <p>Student at Santiago Canyon College</p>
                </div>

                <div class="ab-card">
                    <div class="ab-card-heading">
                        <h1>
                            <i class="fas fa-briefcase"></i>
                            Employment History
                        </h1>
                    </div>
                    <div class="ab-card-content">
                        <div class="ab-card-cards">
                            <div class="ab-card-card">
                                <div class="ab-card-cards-img">
                                    <img src = "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__480.jpg" alt="ok"/>
                                    <i class="fas fa-building"></i>
                                </div>
                                <div class="ab-card-cards-content">
                                    <div class="ab-card-cards-title">
                                        Job Position
                                    </div>
                                    <div class="ab-card-cards-time">
                                        July 2019 - Present
                                    </div>
                                    <div class="ab-card-cards-description">
                                        I worked as x and d and y at this place where I did certain things to make a living.  How's that?
                                    </div>
                                    <div class="ab-card-cards-place">
                                        <a href="">Place of Work</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ab-card">
                    <div class="ab-card-heading">
                        <h1>
                            <i class="fas fa-university"></i>
                            Education
                        </h1>
                    </div>
                    <div class="ab-card-content">
                        <div class="ab-card-cards">
                            <div class="ab-card-card">
                                <div class="ab-card-cards-img">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="ab-card-cards-content">
                                    <div class="ab-card-cards-title">
                                        Chemistry, B.S.
                                    </div>
                                    <div class="ab-card-cards-time">
                                        August 2018 - Present
                                    </div>
                                    <div class="ab-card-cards-description">
                                        I am going to get a degree!
                                    </div>
                                    <div class="ab-card-cards-place">
                                        <a href="">Santiago Canyon College</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ab-card">
                    <div class="ab-card-heading">
                        <h1>
                            <i class="fas fa-tools"></i>
                            Skills
                        </h1>
                    </div>
                    <div class="ab-card-content">
                        <div class="ab-card-list">
                            <p>Laughter</p>
                            <p>Joy</p>
                            <p>Kindness</p>
                        </div>
                    </div>
                </div>

                <div class="ab-card">
                    <div class="ab-card-heading">
                        <h1>
                            <i class="fas fa-language"></i>
                            Languages
                        </h1>
                    </div>
                    <div class="ab-card-content">
                        <div class="ab-card-list">
                            <p>English</p>
                            <p>Chinese (Mandarin)</p>
                        </div>
                    </div>
                </div>

                <div class="ab-card">
                    <div class="ab-card-heading">
                        <h1>
                            <i class="fas fa-parachute-box"></i>
                            Hobbies
                        </h1>
                    </div>
                    <div class="ab-card-content">
                        <div class="ab-card-list">
                            <p>Reading</p>
                            <p>Writing Novels</p>
                            <p>Having Fun</p>
                            <p>Singing</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="ab-content">
                <section>
                    <h1>Welcome to my website!</h1>

                    

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                   

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </div>

            <div class="ab-content">
                <section>
                    <p>I love rabbits!</p>
                </section>
            </div>
        </main>
        <footer>
            <p>Crafted with &#x1F499; by <a href="https://github.com/klickers" target="_blank">klickers</a></p>
        </footer>
        </div>
    );
}

export default UserDashboard;