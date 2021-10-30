import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer className="bg-dark text-center text-white mt-5">

                <div className="container p-4">
                    <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" placeholder="Enter your Email Address" />

                                    </div>
                                </div>

                                <div className="col-auto">

                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>

                    <section className="mb-4">
                        <p>
                            Book from us to get exiting offers in hotels,flights and tours. We are the number one travel booking website in Bangladesh.
                        </p>
                    </section>

                    <section className="">

                        <div className="row">

                            <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                                Travel Go <br />
                                Our address:<br />
                                Uttara,Dhaka<br />

                            </div>

                            <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Bookings</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        Hotels
                                    </li>
                                    <li>
                                        Resorts
                                    </li>
                                    <li>
                                        Flights
                                    </li>
                                    <li>
                                        Trains
                                    </li>
                                </ul>
                            </div>


                            <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Useful Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        About
                                    </li>
                                    <li>
                                        Contact Us
                                    </li>
                                    <li>
                                        Bookings
                                    </li>
                                    <li>
                                        Login
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>

                </div>



                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:  <a className="text-white" href="https://shimulpaul.com/"> ShimulPaul</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;