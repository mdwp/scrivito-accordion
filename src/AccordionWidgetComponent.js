import * as React from 'react';
import * as Scrivito from 'scrivito';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

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
        <h3>{item.get('title')}</h3>
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
