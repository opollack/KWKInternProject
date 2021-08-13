/**
 * This file renders the product details
 *
 */
import React from 'react';
import Tabs from './Tabs';

  const ProductDetails = ({description}) => {
 
          return (
              <div className="elc-product-details">
                  <h2>Product Details</h2>

                  <Tabs className="tab1">

                    <div label = "One Bottle">
                        <div dangerouslySetInnerHTML={{ __html: "<li>Skin feels firmer. 89% of women agreed.</li><li>Skin looks healthy, has a new bounce and vitality.</li><li> Plus, over time, pores look diminished. </li></li>"}}></div>
                    </div>

                    <div label = "In Three Weeks">
                        <div dangerouslySetInnerHTML={{ __html: "<li>Lines and wrinkles appear reduced.</li><li>88% of women said skin looked more youthful</li></li>"}}></div>
                    </div>

                    <div label = "One Dropper">
                        <div dangerouslySetInnerHTML={{ __html: "<li>Skin looks radiant and plumped with hydration—all the way through till morning.</li><li>8-hour anti-oxidant power.</li><li>72-hour hydration (includes Hyaluronic Acid).</li><li>Strengthens skin barrier in just 4 hours.</li><li>Oil-free texture.</li></li>"}}></div>
                    </div>

                    <div label = "Benefit">
                        <div dangerouslySetInnerHTML={{ __html: "The #1 serum in the U.S.* Fight the look of multiple signs of aging."}}></div>
                    </div>

                    <div label = "Skin Type">
                        <div dangerouslySetInnerHTML={{ __html: "Serum for all skintypes."}}></div>
                    </div>

                    <div label = "Ideal For">
                        <div dangerouslySetInnerHTML={{ __html: "<li>Multiple signs of aging</li><li>Visible age prevention</li><li>Loss of firmness, tone</li><li>Lines and wrinkles</li><li>Dryness, dehydration—includes Hyaluronic Acid</li><li>Dullness, loss of radiance</li><li>Uneven skintone</li><li>Anti-oxidants</li></li>"}}></div>
                    </div>

                    <div label = "Formula Facts">
                        <div dangerouslySetInnerHTML={{ __html: "<li>Oil-free</li><li>Recyclable glass bottle</li><li>Dermatologist-tested</li><li>Ophthalmologist-tested</li><li>Non-acnegenic; won't clog pores</li><li>Free of synthetic fragrance</li><li>Free of parabens, phthalates, sulfites, sulfates and mineral oil</li><li>Face serum with Hyaluronic Acid and anti-oxidants</li></li>"}}></div>
                    </div>

                    </Tabs>
             </div>
 
          );
 
  }
 
  // Export out the React Component
  export default ProductDetails;

