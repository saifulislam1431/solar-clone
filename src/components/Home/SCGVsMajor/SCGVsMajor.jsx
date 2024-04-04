import "./style.module.css"
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import { FaCheck, FaXmark } from "react-icons/fa6";

const SCGVsMajor = () => {
    return (
        <section className='my-20'>
            <div className='max-w-5xl mx-auto px-4'>
                <div>
                    <SectionTitle title="SCG vs Major Banks" />
                </div>

                <div className='mt-11'>
                    <div className='shadow-primary p-9 rounded-2xl'>

                        <div className='flex items-center gap-x-3'>
                            <div className='w-5 h-5 rounded-full bg-error' />
                            <div className='w-5 h-5 rounded-full bg-warning' />
                            <div className='w-5 h-5 rounded-full bg-success' />
                        </div>

                        <div className="table-container">
                            <table id="difference-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="text-left">Bank</th>
                                        <th></th>
                                        <th className="text-nowrap">Our Company</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="text-[20px] font-semibold text-nowrap">Approvals within hours</td>

                                        <td className="flex items-center justify-center">
                                            <FaXmark className="p-2 rounded-full bg-error text-white" size={40} />
                                        </td>

                                        <td></td>

                                        <td className="flex items-center justify-center"> <FaCheck className="p-2 rounded-full bg-success text-white" size={40} /></td>
                                    </tr>

                                    <tr>
                                        <td className="text-[20px] font-semibold text-nowrap">Funds the next day</td>

                                        <td className="flex items-center justify-center">
                                            <FaXmark className="p-2 rounded-full bg-error text-white" size={40} />
                                        </td>

                                        <td></td>

                                        <td className="flex items-center justify-center"> <FaCheck className="p-2 rounded-full bg-success text-white" size={40} /></td>
                                    </tr>

                                    <tr>
                                        <td className="text-[20px] font-semibold text-nowrap">Renewable source of funds</td>

                                        <td className="flex items-center justify-center">
                                            <FaXmark className="p-2 rounded-full bg-error text-white" size={40} />
                                        </td>

                                        <td></td>

                                        <td className="flex items-center justify-center"> <FaCheck className="p-2 rounded-full bg-success text-white" size={40} /></td>
                                    </tr>

                                    <tr>
                                        <td className="text-[20px] font-semibold text-nowrap">No Personal collateral or assets</td>

                                        <td className="flex items-center justify-center">
                                            <FaXmark className="p-2 rounded-full bg-error text-white" size={40} />
                                        </td>

                                        <td></td>

                                        <td className="flex items-center justify-center"> <FaCheck className="p-2 rounded-full bg-success text-white" size={40} /></td>
                                    </tr>

                                    <tr>
                                        <td className="text-[20px] font-semibold text-nowrap">Minimal paperwork</td>

                                        <td className="flex items-center justify-center">
                                            <FaXmark className="p-2 rounded-full bg-error text-white" size={40} />
                                        </td>

                                        <td></td>

                                        <td className="flex items-center justify-center"> <FaCheck className="p-2 rounded-full bg-success text-white" size={40} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SCGVsMajor;