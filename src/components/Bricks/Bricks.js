import React from 'react';
import img6x5land from '../../assets/6x5land.jpg';
import img6x5ver from '../../assets/6x5ver.jpg';
import img8x5land from '../../assets/8x5land.jpg';
import img8x5ver from '../../assets/8x5ver.jpg';

const Bricks = () => {
    return (
        <>
            <section id="inner-headline">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="pageTitle">BRICKS</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding gray-bg">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <h3>Technical data</h3>
                            <p><strong>size</strong></p>
                            <div className="overflow-container">
                                <table className="techdata">
                                    <thead>
                                        <tr>
                                            <th>Length</th>
                                            <th>Breath</th>
                                            <th>Height</th>
                                            <th>Weight</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12”</td>
                                            <td>X 8”</td>
                                            <td>X 5”</td>
                                            <td>14.000 KGS</td>
                                        </tr>
                                        <tr>
                                            <td>12”</td>
                                            <td>X 6”</td>
                                            <td>X 5”</td>
                                            <td>11.000 KGS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <p>6"X 5"</p>
                            <img src={img6x5land} className="img-responsive" alt="no img" />
                        </div>

                        <div className="col-md-3">
                            <p>6"X 5"</p>
                            <img src={img6x5ver} className="img-responsive" alt="" />
                        </div>

                        <div className="col-md-3">
                            <p>8"X 5"</p>
                            <img src={img8x5land} className="img-responsive" alt="" />
                        </div>

                        <div className="col-md-3">
                            <p>8"X 5"</p>
                            <img src={img8x5ver} className="img-responsive" alt="" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <table className="technidata">
                                <tbody>
                                    <tr>
                                        <td>Burning</td>
                                        <td>Nil</td>
                                    </tr>
                                    <tr>
                                        <td>Availability</td>
                                        <td>Through out the year</td>
                                    </tr>
                                    <tr>
                                        <td>Pollution</td>
                                        <td>Nil</td>
                                    </tr>
                                    <tr>
                                        <td>No.of Blocks per sqft</td>
                                        <td>2.4</td>
                                    </tr>
                                    <tr>
                                        <td>Mortar</td>
                                        <td>10% USE</td>
                                    </tr>
                                    <tr>
                                        <td>Plastering</td>
                                        <td>Nil</td>
                                    </tr>
                                    <tr>
                                        <td>Damages</td>
                                        <td>0.5% to 1%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <p><strong>Compressive Strength</strong></p>
                            <div className="overflow-container">
                                <table className="techdata">
                                    <thead>
                                        <tr>
                                            <th>S. No</th>
                                            <th>Reference</th>
                                            <th>Dimensions (mm)</th>
                                            <th>Area (mm2)</th>
                                            <th>Ultimate Compressive Load (kg)</th>
                                            <th>Ultimate Compressive Stress (N/mm2)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Interlock Fly ash Blocks</td>
                                            <td>300 X 200 X 125</td>
                                            <td>60000</td>
                                            <td>40000 To 48000</td>
                                            <td>6.5 To 7.8</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Interlock Fly ash Blocks</td>
                                            <td>300 X 150 X 125</td>
                                            <td>45000</td>
                                            <td>19000 To 25000</td>
                                            <td>4.1 To 5.4</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Solid Blocks</td>
                                            <td>225 X 150 X 100</td>
                                            <td>33750</td>
                                            <td>22500 To 31000</td>
                                            <td>6.5 To 9.0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Bricks;
