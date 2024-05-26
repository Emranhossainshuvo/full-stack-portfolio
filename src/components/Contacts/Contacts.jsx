import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

const Contacts = () => {
    return (
        <>
            {/*section that will hold everything in this page  */}
            <section className="mt-5 mb-5">
                {/* section to hold the component title */}
                <section>
                    <div className="mb-20 text-center">
                        <div className="w-11/12">
                            <p className="mb-4">Contacts</p>
                            <h3 className="text-3xl font-semibold mb-6">Let&apos;s get connected</h3>
                        </div>
                    </div>
                </section>
                {/* section to hold the links and the image */}
                <section className="md:flex md:flex-row-reverse md:justify-around md:items-center">
                    {/* section to hold the social links */}
                    <section className="w-full">
                        <ul className="md:px-28 rounded-xl md:mx-5 md:h-full ">
                            <li className="flex justify-start gap-2 mb-2 items-center">
                                <FaGithub />
                                <span>
                                    Let&apos;s get connected with Github
                                </span>
                            </li>
                            <li className="flex justify-start gap-2 mb-2 items-center">
                                <FaTwitter />
                                Stay together at Twitter
                            </li>
                            <li className="flex justify-start gap-2 mb-2 items-center">
                                <FaLinkedin />
                                Connect me on Linkedin
                            </li>
                            <li className="flex justify-start gap-2 mb-2 items-center">
                                <FaMedium />
                                connect on medium.
                            </li>
                        </ul>
                    </section>
                    {/* section to hold the form */}
                    <section className="w-full">
                        <form className="grid bg-transparent w-full grid-cols-1">
                            <p>Name</p>
                            <input type="text" className="p-2 text-black bg-white rounded-md" placeholder="Name" />
                            <p>Email</p>
                            <input type="email" className="p-2 text-black bg-white rounded-md" placeholder="Email" />
                            <p>Your messege</p>
                            <textarea name="Messege" className="p-2 text-black bg-white rounded-md" placeholder="Messege" id="">

                            </textarea>
                        </form>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Contacts;