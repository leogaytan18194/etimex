
import React from 'react';
import { loadLink, PalencaLinkReact } from '@palenca/palenca-link';
import { useCallback } from 'react';

const linkPromise = loadLink('public_cedf_4867_846f_31747bbfa37f', 'b837c067-8d87-45f6-89da-395ca990c82e');

function Palenca() {
    const handleEvent = useCallback((event: string, data: object) => {
        console.log(event);
        console.log(data)
      }, []);
    
      const options = {
        configuration: {
          hideConsent: true,
          country: 'mx',
        },
        appearance: {
          primaryColor: '#483E6B',
          borderRadius: '999px',
        },
      };
  return (
    <div>
    <PalencaLinkReact
      link={linkPromise}
      options={options}
      onEvent={handleEvent}
    />
</div>
  );
}

export default Palenca;
