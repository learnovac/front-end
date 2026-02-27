import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto font-body">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">Terms and Conditions</h1>
                    <p className="text-muted-foreground mb-10">Last updated: February 25, 2026</p>

                    <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <p>Please read these terms and conditions carefully before using Our Service.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Interpretation and Definitions</h2>
                            <h3 className="text-xl font-bold text-white mb-2 font-heading">Interpretation</h3>
                            <p>
                                The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                            </p>

                            <h3 className="text-xl font-bold text-white mb-2 mt-6 font-heading">Definitions</h3>
                            <p className="mb-4">For the purposes of these Terms and Conditions:</p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>
                                    <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                                </li>
                                <li>
                                    <strong>Country</strong> refers to: California, United States
                                </li>
                                <li>
                                    <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to Learnovac.
                                </li>
                                <li>
                                    <strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.
                                </li>
                                <li>
                                    <strong>Service</strong> refers to the Website.
                                </li>
                                <li>
                                    <strong>Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.
                                </li>
                                <li>
                                    <strong>Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.
                                </li>
                                <li>
                                    <strong>Website</strong> refers to learnovac, accessible from <a href="https://learnovac.com" className="text-primary hover:underline">https://learnovac.com</a>
                                </li>
                                <li>
                                    <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Acknowledgment</h2>
                            <p>
                                These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                            </p>
                            <p className="mt-4">
                                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                            </p>
                            <p className="mt-4">
                                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                            </p>
                            <p className="mt-4">
                                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                            </p>
                            <p className="mt-4">
                                Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Links to Other Websites</h2>
                            <p>
                                Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
                            </p>
                            <p className="mt-4">
                                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
                            </p>
                            <p className="mt-4">
                                We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
                            </p>

                            <h3 className="text-xl font-bold text-white mb-2 mt-6 font-heading">Links from a Third-Party Social Media Service</h3>
                            <p>
                                The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.
                            </p>
                            <p className="mt-4">
                                You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service, including any content, goods, or services made available through them. Your use of any Third-Party Social Media Service is governed by that Third-Party Social Media Service's terms and privacy policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Termination</h2>
                            <p>
                                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                            </p>
                            <p className="mt-4">
                                Upon termination, Your right to use the Service will cease immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Limitation of Liability</h2>
                            <p>
                                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                            </p>
                            <p className="mt-4">
                                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 font-heading">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                            <p>
                                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Governing Law</h2>
                            <p>
                                The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Disputes Resolution</h2>
                            <p>
                                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Contact Us</h2>
                            <p className="mb-4">If you have any questions about these Terms and Conditions, You can contact us:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>By email:</strong> support@learnovac.com</li>
                                <li><strong>By visiting:</strong> <a href="https://learnovac.com" className="text-primary hover:underline">https://learnovac.com</a></li>
                                <li><strong>By phone:</strong> +1 323-284-8812</li>
                                <li><strong>By mail:</strong> 3300 Sunset Blvd, Los Angeles, CA 90026, United States</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
