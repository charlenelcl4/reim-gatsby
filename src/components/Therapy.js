import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Translate, Trans } from '../../i18n/utils/translate';
import therapy from "../data/therapy"

const Therapy = ({ pageContext: { locale: language } }) => {
    const translate = Translate('index');

return (
    <section>
        <div className="container px-4 md:px-6">
            <Accordion type="single" collapsible>
                {therapy.map((item, index) => (
                    <AccordionItem value="item-1" id={index}>
                    <AccordionTrigger>
                        {item.chname && <>{item.chname}</> }
                        {item.enname && <>{item.enname}</> }
                    </AccordionTrigger>
                    <AccordionContent>
                    <p>{item.intro}</p>
                    <p>{item.imageName}</p>
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
);
};

export default Therapy;