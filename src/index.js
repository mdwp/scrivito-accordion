import * as Scrivito from 'scrivito';
import * as React from 'react';
import "./AccordionItemWidgetEditingConfig";
import "./AccordionItemWidgetClass";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,

} from 'react-accessible-accordion';

const AccordionWidget = Scrivito.provideWidgetClass('AccordionWidget', {
  attributes: {
    items: ['widgetlist', { only: 'AccordionItemWidget' }],

  },
});

Scrivito.provideEditingConfig('AccordionWidget', {
  title: 'Accordion',

  attributes: {
    items: {
      title: 'Accordion Item',
    },

  },
  properties: [
    'items',

  ],
});



Scrivito.provideComponent("AccordionWidget", ({ widget }) => {
  const items = widget.get('items');

  /*if (!items.length) {
    return (
      <InPlaceEditingPlaceholder center={true}>
        Create Accordion Items in widget properties.
        </InPlaceEditingPlaceholder>
    );
  }*/

  const list = items.map((item, index) =>
    <AccordionItem key={index}>
      <AccordionItemTitle>
        <h3  className="h4 u-position-relative">{item.get('title')}

        <div className="accordion__arrow" role="presentation" />
    </h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>{item.get('text')}</p>
      </AccordionItemBody>
    </AccordionItem>
  );

  return (
    <Accordion>
      {list}
    </Accordion>
  );
}
)


export default AccordionWidget;

