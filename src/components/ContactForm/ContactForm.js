import React from 'react';
import { Input, Textarea } from './FormElements';
import { MdEmail } from 'react-icons/md';

const ContactForm = ({ title, subtitle, submittedTitle, submittedMessage }) => {
    const [isSubmitted, setSubmitted] = React.useState(false);
    async function handleSubmit(e) {
        e.preventDefault();

        const elementsArray = [...e.target.elements];
        const formData = elementsArray.reduce((acc, elem) => {
            if (elem.name) {
                acc[elem.name] = elem.value;
            }

            return acc;
        }, {});

        console.log(formData);
        setSubmitted(true);
    }

    const subtitleParagraphs = subtitle?.split('\n\n');
    return (
        <>
            <div className="container pt-6 md:pt-12 text-center">
                {isSubmitted ? (
                    <>
                        <h2 className="font-bold text-3xl md:text-4xl mb-4">{submittedTitle}</h2>
                        <p className="text-base md:text-lg">{submittedMessage}</p>
                        <div className="bg-primary-text p-0 rounded-full text-primary-bg inline-block mt-2 transform scale-75 md:scale-100 mb-12">
                            <MdEmail size={144} className="text-current" />
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="font-bold text-3xl md:text-4xl mb-4">{title}</h2>
                        <p className="text-base md:text-lg">
                            {subtitleParagraphs?.map((item, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <span>{item}</span>
                                        {i !== subtitleParagraphs.length - 1 && (
                                            <br className="hidden md:block" />
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </p>
                        <form className="my-6 space-y-4 md:px-20" onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
                                <Input
                                    name="firstname"
                                    id="firstname"
                                    label="First name"
                                    required
                                />
                                <Input name="lastname" id="lastname" label="Last name" required />
                            </div>
                            <div>
                                <Input
                                    name="email"
                                    id="email"
                                    type="email"
                                    label="Email"
                                    required
                                />
                            </div>
                            <div>
                                <Textarea name="message" id="message" label="Message" required />
                            </div>
                            <div className="flex justify-start">
                                <button className="w-full md:w-auto px-12 py-2 bg-primary-accent text-primary rounded-sm">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>
    );
};

export default ContactForm;
