import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Link from "next/link"
import { ceraBold, ceraMedium } from '@/app/fonts';
import { FaCheckCircle } from 'react-icons/fa';
import Image from "next/image";
import heroImg from "../../../public/banner/Photo-8.jpg";

const BusinessTermLoan = () => {
    return (
        <section className='lg:my-28'>

            {/* How to Get the Best Terms and Rates */}
            <div className='max-w-6xl mx-auto space-y-6 text-[#505050] px-4'>
                <SectionTitle title="How to Get the Best Terms and Rates" textStyle="text-left" textColor="text-[#000000]" />
                <p>A lightning strike wipes out a majority of your business’ computers. Your food truck’s transmission is kaput. An unexpected business opportunity lands at your door but requires quick financing. Your inventory is depleted due to higher-than-expected demand. There are many reasons to secure short-term business loans, and even more reasons to choose Solar Capital Group when you need quick access to working capital.</p>


                <p>Since 2014, Solar Capital Group has helped nearly 4,000 small and medium-sized businesses acquire over $500,000,000 in financing. We love small businesses and are proud to maintain an A+ rating through the Better Business Bureau®.</p>

                <p>Are you looking into how to secure the best terms and rates on a short-term business loan? Read on to get the facts from an insider’s perspective.</p>

                <div className='bg-[#F7F7F7] p-6'>
                    <p className='font-medium'>No waiting. Zero brokerage fees. Instant pre-approvals.</p>

                    <p>5 minutes is all it takes to apply and get pre-approved for a short-term business loan up to $750,000. By working with a licensed direct lender, you won’t have to wait weeks to learn about the status of your application (or pay brokerage fees). <Link href="/application" className='text-sm text-primary font-medium'>Apply for a short-term small business loan</Link> through Solar Capital Group.</p>
                </div>
            </div>

            {/* Current rates and terms */}
            <div className='bg-[#F7F7F7] py-14 mt-20'>
                <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 px-4'>

                    <div className='w-full text-[#505050]'>
                        <h1 className={`${ceraBold?.className} text-primary text-[36px]`}>Current rates and terms</h1>

                        <p className='my-5'>A business loan consolidation can bring much-needed relief to small businesses bogged down by multiple loans or debts. Many businesses love the convenience of making a single monthly payment instead of multiple payments staggered throughout the month.</p>

                        <p>While the terms of a business loan consolidation are often more flexible, you might end up repaying your debts at a higher interest rate if your credit score has taken a hit due to late payments or maxing out numerous lines of credit.</p>
                    </div>

                    <div className='w-full text-[#505050] space-y-7'>
                        <p>Here are the latest rates and terms for small businesses looking to secure rapidly funded working capital:</p>

                        <div className='flex flex-col lg:flex-row items-start justify-between'>
                            <div className='space-y-2'>
                                <p className='text-primary font-medium'>Loan Amounts</p>
                                <p>$2,000 – $750,000</p>
                            </div>

                            <div className='space-y-2'>
                                <p className='text-primary font-medium'>Term Duration</p>
                                <p>90 days to 18 months</p>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row items-start justify-between'>
                            <div className='space-y-2'>
                                <p className='text-primary font-medium'>Interest Rates</p>
                                <p>10% APR and up</p>
                            </div>

                            <div className='space-y-2'>
                                <p className='text-primary font-medium'>Fast Approvals</p>
                                <p>Usually within 48 hours</p>
                            </div>
                        </div>

                        <div>
                            <p>If you have “good” to “excellent” credit, you may also qualify for a long-term or SBA loan through Solar Capital Group.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* How to qualify */}
            <div className='max-w-6xl mx-auto text-[#505050] mt-20 px-4'>

                <div className='flex flex-col lg:flex-row items-start justify-center gap-10'>
                    <div className='w-full space-y-4'>
                        <SectionTitle title="How to qualify" textStyle="text-left" textColor="text-[#000000]" />

                        <p>As a direct lender, Solar Capital Group has more flexibility in terms of lending to business owners who may otherwise not qualify for a loan through a traditional lender.</p>

                        <p className='text-[#505050] font-medium'>Here is what we look for in approval short-term business loan applications:</p>

                        <div className='mt-4 flex flex-col space-y-2'>
                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>At least 6 months in business</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>$150,000 in annual revenue</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>FICO® score of 500 or higher</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>3 months of bank statements</span></p>
                        </div>
                    </div>

                    <div className='lg:w-3/6'>
                        <Image src={heroImg} alt='heroImg' />
                    </div>
                </div>

                <div className='mt-6 space-y-3'>
                    <p>That’s it. That’s all you need to start the process and get pre-qualified for a short-term business loan through Solar Capital Group. Compared to traditional financial institutions, Solar Capital Group gives more weight to current and projected revenues than credit scores alone.</p>

                    <p>Even if your credit score has kept you from obtaining a business loan in the past, we may still be able to help you obtain rates and terms that perfectly align with your business goals.</p>
                </div>

            </div>

            {/* I have bad credit. Can I apply for quick business funding? */}
            <div className='bg-[#F7F7F7] py-14 mt-20'>
                <div className='max-w-6xl mx-auto text-[#505050] px-4'>
                    <div className='space-y-7'>
                        <h1 className={`${ceraBold?.className} text-[28px] lg:text-[40px] text-primary max-w-5xl`}>&quot;I have bad credit. Can I apply for quick business funding?&quot;</h1>

                        <p>Life happens. At Solar Capital Group, we know there are two sides to credit; it can either help you secure great rates and terms — or squash your financing ambitions. You may have missed credit payments in the past, or a past bankruptcy continues to haunt your credit years after the fact. We’re here to help.</p>

                        <p>Business owners with credit scores in the area of 450 may still qualify for quick business funding so long as the business has documentation showing $15,000 in monthly revenue, and solid revenue growth.</p>

                        <p>Seeking a loan when you have bad credit may delay the process a few days, and you may not qualify for the same rates and terms enjoyed by those with good credit. But, taking out a business loan and keeping up with the payments can be a great way to restore your credit and finance your business.</p>

                        <p>If you have a problematic credit history and would like to learn more about which loan product is best for you, call Solar Capital Group at <Link className='text-primary' href="tel:888-401-5199">888-401-5199</Link>. We have lending specialists on hand to answer your questions and make recommendations.</p>
                    </div>
                </div>
            </div>

            {/* The benefits of working with a direct lender */}
            <div className='my-16 max-w-6xl mx-auto text-[#505050] px-4'>
                <div>
                    <h1 className={`${ceraBold?.className} text-[#000000] text-[40px] text-center`}>The benefits of working with a direct lender</h1>
                </div>

                <div className='flex flex-col lg:flex-row items-start justify-center gap-10 mt-12'>

                    <div className='space-y-4'>
                        <p>Many small business owners love the fact that they can apply and be approved for a loan the very same day. And, by financing your business through a direct lender, businesses have access to loans with more reasonable terms and rates than they would typically receive from a traditional lender.</p>

                        <p className='font-semibold'>The benefits of going through a direct lender for this type of loan include:</p>


                        <div className='mt-4 flex flex-col space-y-2'>
                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span className='text-[14px]'>Fast access to working capital</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span className='text-[14px]'>Minimal paperwork</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span className='text-[14px]'>Flexible repayment terms</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span className='text-[14px]'>Generous loan amounts</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span className='text-[14px]'>Low rates compared to other quick loans</span></p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className={`${ceraMedium.className} text-[22px] text-[#000000]`}>Are there any detractors?</p>

                        <p>Of course. All loans come with their own set of positive and negative qualities. So, no matter which loan you ultimately choose there are bound to be some drawbacks, and this still holds true with short-term loans.</p>

                        <p>Short-term loans usually come with higher interest rates compared to loans with longer terms. And, if you operate a business with seasonal revenue highs and lows, you may find it difficult to keep up with the fixed repayment structure during off-peak seasons.</p>

                        <p>Not sure if a short-term business loan is in the longer-term interest of your business? Call <Link className='text-primary' href="tel:888-401-5199">Solar Capital Group</Link> and speak with a lending specialist to discuss other options that may be open to you.</p>
                    </div>

                </div>
            </div>

            {/* How to get the most out of your short-term business loan */}
            <div className='my-16 bg-[#F7F7F7] py-14'>
                <div className='max-w-6xl mx-auto text-[#505050] px-4'>
                    <div className='space-y-8 text-center'>
                        <h1 className={`${ceraBold?.className} text-[#000000] text-[40px] text-center`}>How to get the most out of your short-term business loan</h1>


                        <p className='font-medium max-w-5xl mx-auto'>Ask any small business owner about working capital and they will likely tell you that it “takes money to make money.” But, borrowing money isn’t the only solution, and it may harm your long-term financial outlook if you don’t do your research and rush into a loan decision too quickly. Although, in a vast majority of instances, small business owners know exactly why they are requesting a loan and how they will apply in order to build their business.</p>

                        <p className='font-medium max-w-4xl mx-auto'>Here are a few general scenarios where taking out a short-term loan can be beneficial to a business’ success,
                            now and well into the future:</p>
                    </div>

                    <div className='mt-14 space-y-8'>

                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <div className={`text-[22px] font-bold w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center text-white ${ceraBold?.className}`}>
                                    <h1>1</h1>
                                </div>
                                <p className={`text-primary ${ceraMedium?.className} text-[20px]`}>Replenishing inventory.</p>
                            </div>
                            <div className='text-[14px]'>
                                <p>Let’s say a customer requests a bulk order of a certain product. They can pay for the items once they arrive in four weeks. But, the supplier doesn’t offer net 30 payments or credit of any kind — only payments in full. As it is, this product has a 200% markup and you extend a 10% discount to the customer since they are buying in bulk. Without taking a loan, it would be nearly impossible to fund this inventory purchase out-of-pocket. By securing a short-term business loan, you can pay your supplier upfront, the customer receives the products they ordered, and you have the money to pay off the loan and keep a decent amount of money as pure profit.</p>
                            </div>
                        </div>


                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <div className={`text-[22px] font-bold w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center text-white ${ceraBold?.className}`}>
                                    <h1>2</h1>
                                </div>
                                <p className={`text-primary ${ceraMedium?.className} text-[20px]`}>Upgrade or repair equipment</p>
                            </div>
                            <div className='text-[14px]'>
                                <p>A business plan is only as strong as its weakest link in the chain. If you find that a certain piece of machinery, equipment, or infrastructure is causing money-losing inefficiencies in your business, securing a loan with a shorter term may be a great option. This loan type allows you to receive funds quickly so you can being seeing returns on your investment as soon as possible.</p>
                            </div>
                        </div>


                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <div className={`text-[22px] font-bold w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center text-white ${ceraBold?.className}`}>
                                    <h1>3</h1>
                                </div>
                                <p className={`text-primary ${ceraMedium?.className} text-[20px]`}>Promote your business</p>
                            </div>
                            <div className='text-[14px]'>
                                <p>Short-term loans are not designed for those taking their first leap into the business world. But, if customers are raving about your products or services and one of the few things holding your company back is a lack of exposure, you may want to consider a loan to finance promotional opportunities. Plus, many advertising and marketing expenses are tax-deductible.</p>
                            </div>
                        </div>


                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <div className={`text-[22px] font-bold w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center text-white ${ceraBold?.className}`}>
                                    <h1>4</h1>
                                </div>
                                <p className={`text-primary ${ceraMedium?.className} text-[20px]`}>Covering seasonal peaks and slumps</p>
                            </div>
                            <div className='text-[14px]'>
                                <p>Many businesses face seasonal ups and downs. A retailer may suddenly remembers selling out a certain good the year prior, and wants to make an additional inventory purchase. Or, due to an unexpectedly rainy spring, the grass is growing faster and a lawncare provider needs to hire additional staff. These are a few instances where a short-term loan can cover a short-term need, without causing undue financial hardship on the business owner.</p>
                            </div>
                        </div>


                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <div className={`text-[22px] font-bold w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center text-white ${ceraBold?.className}`}>
                                    <h1>5</h1>
                                </div>
                                <p className={`text-primary ${ceraMedium?.className} text-[20px]`}>
                                    Expand operations</p>
                            </div>
                            <div className='text-[14px]'>
                                <p>Depending on the nature of the business, a short-term loan can also be used to finance a business expansion. Just be sure that your expansion plans can begin generating profits before the term of the loan is finalized, otherwise, you may find yourself upside-down on the loan and have difficulty making payments.</p>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <p className='text-[14px] text-center'>Those considering expansions into multiple markets over the course of several years are generally better off going with a long-term loan.</p>
                        </div>

                    </div>
                </div>
            </div>

            {/*Frequently Asked Questions  */}

            <div className='my-16 max-w-6xl mx-auto px-4'>
                <div className='space-y-8 text-center'>
                    <h1 className={`${ceraBold?.className} text-[#000000] text-[40px] text-center`}>Frequently Asked Questions</h1>


                    <p className='font-medium max-w-4xl mx-auto text-[#505050] text-[18px]'>No matter the loan amount, we are sure you’ll have some questions when it comes time to apply. So, the Solar Capital Group team has put together a short list of these most-asked questions as they relate to short-term small business loans, and here they are:</p>
                </div>

                <div className='max-w-6xl mx-auto shadow-primary rounded-3xl p-12 mt-16'>

                    <div className="collapse collapse-arrow border-b rounded-none py-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className={`collapse-title ${ceraBold?.className} text-[22px]`}>
                            How much can I borrow?
                        </div>
                        <div className="collapse-content text-[14px] text-[#505050]">
                            <p className='pl-4'>All depending on your credit score, business revenue, and the amount you’d like to borrow, a direct lender such as Solar Capital Group can lend anywhere from $2,500 to $750,000.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b rounded-none py-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className={`collapse-title ${ceraBold?.className} text-[22px]`}>
                            How soon do I need to repay the loan?
                        </div>
                        <div className="collapse-content text-[14px] text-[#505050]">
                            <p className='pl-4'>Since these loans are meant to satisfy short-term lapses in working capital or quickly generate additional revenue, the terms often require repayment within 18 months, although loans that require repayment within 3 months isn’t unheard of, especially for businesses that are only borrowing several thousand dollars.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b rounded-none py-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className={`collapse-title ${ceraBold?.className} text-[22px]`}>
                            Does Solar Capital Group charge brokerage fees?
                        </div>
                        <div className="collapse-content text-[14px] text-[#505050]">
                            <p className='pl-4'>No. Fast Business Financial does not charge brokerage fees.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b rounded-none py-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className={`collapse-title ${ceraBold?.className} text-[22px]`}>
                            Is this the right loan for me?
                        </div>
                        <div className="collapse-content text-[14px] text-[#505050]">
                            <p className='pl-4'>This is the type of question we wished borrowers would ask more often. Loans with shorter terms are financed faster and are repaid faster. Short-term loans are meant to cover momentary “hiccups” in financing and businesses emergencies.</p>

                            <p className='mt-3'>Before you apply for a loan, always do your research, seek advice from professionals, and square away all the reasons you believe your business could benefit from a loan, then weight these against the amount of interest you will need to repay on the loan.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b rounded-none py-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className={`collapse-title ${ceraBold?.className} text-[22px]`}>
                            How long does the process take?
                        </div>
                        <div className="collapse-content text-[14px] text-[#505050]">
                            <p className='pl-4'>While the process of securing a short-term loan is typically not as fast as a merchant cash advance or fast business loan, your loan will be processed much faster than going through a traditional lender. (Think days, not weeks.)</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b rounded-none py-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className={`collapse-title ${ceraBold?.className} text-[22px]`}>
                            How long does the process take?
                        </div>
                        <div className="collapse-content text-[14px] text-[#505050]">
                            <p className='pl-4'>Solar Capital Group offers short-term loans to small and medium-sized business looking to replenish working capital, complete emergency repairs, purchase equipment, or finance a sudden business opportunity.</p>

                            <p className='pl-4 mt-3'>Since our brokerage’s founding in 2014, we have helped thousands of businesses secure over $500,000,000 in working capital. When you choose our team, you have the benefit of working with a direct lender that can help you secure better rates and terms for your small business.</p>
                        </div>
                    </div>


                    <div className="collapse collapse-arrow border-b rounded-none py-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className={`collapse-title ${ceraBold?.className} text-[22px]`}>
                            Why do short-term loans have higher rates?
                        </div>
                        <div className="collapse-content text-[14px] text-[#505050]">
                            <p className='pl-4'>There are a few reasons why you will be charged a higher rate on a short-term loan than, say… a long-term loan or SBA loan. For one, the term is shorter, yet the risk to lenders remains the same. Therefore, lenders factor the term duration and associated risk of the loan into each loan offer.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b rounded-none py-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className={`collapse-title ${ceraBold?.className} text-[22px]`}>
                            What information do I need in order to apply?
                        </div>
                        <div className="collapse-content text-[14px] text-[#505050]">
                            <p className='pl-4'>Fast Business Financial has a 5-minute pre-qualification application. So, you will know right away if you qualify for a loan.</p>
                        </div>
                    </div>
                </div>

                <div className='my-16'>
                    <p className={`${ceraMedium?.className} text-[20px]`}>At this point in the process, we will reach out to you for additional information, which may include:</p>

                    <div className='mt-4 flex flex-col space-y-2'>
                        <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Documentation of ownership</span></p>

                        <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>State-issued ID</span></p>

                        <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Last three months of bank statements</span></p>


                        <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Personal tax return information</span></p>

                        <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Bank account (routing and account number)</span></p>

                        <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Last 3 moths of bank statements</span></p>

                        <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Voided check from business account</span></p>
                    </div>
                </div>
            </div>

            {/* Need working capital… and FAST? */}
            <div className='my-16 bg-[#F7F7F7] py-14'>
                <div className='space-y-7 max-w-6xl mx-auto px-4 text-[#505050]'>
                    <h1 className={`${ceraBold?.className} text-[28px] lg:text-[40px] text-primary max-w-5xl`}>Need working capital… and FAST?</h1>

                    <p>As a company that works with small businesses on a daily basis, we know how important it can be to secure funding as quickly as possible. So, if you need working capital “like yesterday,” you’ll be happy to know that Solar Capital Group can transfer funds directly into your account in a matter of days — not several weeks or months — days!</p>

                    <p>To see if you qualify for a short-term business loan, complete <Link href="/application" className='text-primary'>our fast business financing application</Link>, or call to speak with one of our lending specialists. Dial <Link href="tel:888-401-5199" className='text-primary'>888-401-5199</Link> today.</p>

                    <p>If your business can’t wait several days for a business loan, we’ve got you covered there, too. Solar Capital Group also offers fast business loans which can be approved and deposited into your business checking account with 24 hours.</p>
                </div>
            </div>

            <div className='my-16 space-y-7 max-w-6xl mx-auto px-4 text-[#505050]'>
                <h1 className={`${ceraBold?.className} text-[28px] lg:text-[40px] text-primary max-w-5xl`}>Sensible borrowing for small businesses</h1>

                <p>At Solar Capital Group, we know it’s typically better for businesses to save money in anticipation of future financial obstacles or unexpected opportunities. And, most business owners we talk to understand the value of saving versus borrowing, but there are always those instances when taking out a loan becomes a business necessity.</p>

                <p>In these cases, business owners aren’t looking for Benjamin Franklin-like advice — they just need quick access to working capital to overcome a present financial situation. This is what short-term loans are designed to do.</p>

                <p>With short-term business loans, all funds that are approved and requested are deposited all at once. This allows businesses to immediately reinvest in their operations, whether this means buying equipment, hiring personnel, or consolidating multiple loans to take advantage of Solar Capital Group’s interest rates.</p>
            </div>
        </section>
    );
};

export default BusinessTermLoan;