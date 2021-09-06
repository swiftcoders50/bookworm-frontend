import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className="p-10 bg-red-600 text-gray-200">
                <div className="mx-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-4">
                            <h4><strong className="p-2 bg-gray-200"><span className="text-xl text-gray-800">Book<span className="text-red-600">W</span>orm</span></strong></h4><br/>
                            1203 Town Center<br/>
                            Drive FL 33458 BD<br/><br/>
                            <strong>+0000 123 456 789</strong><br/>
                            <strong>info@example.com</strong>
                        </div>
                        <div className="mb-4">
                        <h4 className="text-xl"><strong>Help</strong></h4><br/>
                            <ul>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Search</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Help</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Information</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Privacy Policy</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Shipping Information</a></Link></li>
                            </ul>
                        </div>
                        <div className="mb-4">
                        <h4 className="text-xl"><strong>Support</strong></h4><br/>
                            <ul>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Search Terms</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Advanced Search</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Helps & Faqs</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Store Location</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Orders & Returns</a></Link></li>
                            </ul>
                        </div>
                        <div className="mb-4">
                        <h4 className="text-xl"><strong>Information</strong></h4><br/>
                            <ul>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Contact</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">About</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Carrers</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Refund & Returns</a></Link></li>
                                <li className="pb-4"><Link  href="#"><a className="hover:text-gray-800">Deliveries</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mt-8"/>
                    <div className=" mb-4 mt-4 text-center">
                        <p className="text-gray-300"><b>@2021 | Swift Coders</b></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;