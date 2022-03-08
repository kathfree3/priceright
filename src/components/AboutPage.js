import React from 'react'
 
import { Title, PageWrapper } from '../style/globalComponents'

const AboutPage = () => (
  <PageWrapper>     
    <Title> About Us</Title>
    <div className='houseInfoForm'>
      <p> 
        In 2020, less than 8% of homeowners sold their homes independently. This means that 92% of homeowners paid high fees to real estate agents 
        and/or other third party consultants. For some sellers, these fees are merely an annoyance. But for others, these fees have large consequences: 
        they prevent sellers from receiving guidance during the sale process. For those that are unable to afford real estate agents, the current alternative 
        (FSBO) puts sellers at a disadvantage because they don’t have assistance in pricing their home, staging or taking photos of their home, or 
        writing listing descriptions. 
      </p>
      <p>
        Additionally, post Covid-19 the Real Estate market has experienced significant turmoil. Prices in many urban areas such as New York have skyrocketed, 
        and the search to buy, sell and lease homes is also on the rise. Furthermore, the pandemic has increased income inequality, with many minorities 
        bearing the brunt of the pandemics' economic repercussions. For instance, as of 2020, the median household income of white households is 7.8 times 
        larger than the median household income of black households. Throughout the past 18 months, we have seen a rise against discrimination, and 
        we believe that this should also be enforced in the housing market. To that end, we believe that there is strong evidence to support an 
        underlying trend of bias in the appraisal process, which results in undervaluing homes owned by minorities. For instance, a Gallub and 
        Brooking Institution report indicates a trend of widespread devaluation of Black-owned property. Private homeowners who cannot afford 
        appraisers or are suffering from bias and/or discriminatory quotas should be empowered to bypass middlemen and sell their home for a fair price. 
        This is the foundation for the global context of our project, and is the issue we are trying to address through our work.
      </p>
      <p>
        At PriceRight, our mission is to make FSBO housing a more attractive and fair alternative to expensive third party consultants. 
        To accomplish this goal, we are building an ML-based advisory platform capable of recommending fair house prices and 
        suggesting listing optimizations based on user input.
      </p>
    </div>
  </PageWrapper>
)
export default AboutPage