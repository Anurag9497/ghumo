import React from 'react';
import './index.css';
import AboutUs from '../../images/AboutUs.jpg';

function About() {
    return (
        <div className="about">
            <div className="about-image">
                <img src={AboutUs} alt="ABOUT US"/>
            </div>
            <div className="about-text">
                <p className="about-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in metus fringilla orci feugiat tincidunt vitae quis nisl. Fusce et facilisis est.
                    Maecenas aliquam, mi sed egestas porttitor, leo mi ultrices ligula, non interdum dolor velit et libero. Mauris ut risus quis sapien porta pellentesque
                    sit amet sed metus. Duis ut sagittis augue. Sed ut sem quis velit viverra commodo. Donec ullamcorper erat et nisl placerat blandit. In condimentum ex 
                    congue sodales molestie. Ut vel leo quis diam congue accumsan quis at enim. Cras maximus gravida nibh et suscipit. Integer ut est metus. Fusce velit erat,
                    convallis nec semper sit amet, cursus vitae velit. Phasellus vestibulum diam urna, vel venenatis turpis semper ut. Fusce hendrerit vulputate urna, ac mattis
                    enim accumsan convallis. Praesent in feugiat dolor, vitae imperdiet massa. Nulla a lobortis purus.<br/><br/>
                    
                    In ornare finibus enim vitae facilisis. Ut sem nulla, ornare eget dui ut, tristique posuere mi. Nullam at placerat neque. Nullam sed condimentum dolor. 
                    Quisque sit amet feugiat magna. Quisque sapien eros, cursus a est eget, dapibus facilisis ligula. Etiam at neque venenatis, eleifend nibh sed, eleifend 
                    felis. Quisque dictum arcu pharetra lectus lobortis tristique. Vivamus rutrum felis non nisi molestie, non euismod sapien mattis. Donec fringilla, urna 
                    a dictum aliquam, lorem nulla aliquet sapien, eu placerat est nulla quis orci. Nam sit amet tellus suscipit, pulvinar felis a, egestas leo. Nam in ipsum mi.
                    Cras tempor, quam sit amet maximus pellentesque, dui tortor rhoncus velit, sed placerat est velit quis mi. Sed rutrum elementum interdum. Praesent at odio efficitur,
                    faucibus ante eget, iaculis mauris. Pellentesque non nibh at odio rutrum gravida.<br/><br/>

                    Phasellus ac dui ac felis maximus vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget tempor elit, in 
                    faucibus tellus. Vestibulum ornare et urna id dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nunc id eros aliquam pharetra sit amet in
                    lorem. Duis non felis condimentum, tincidunt purus nec, lobortis turpis. Vivamus euismod magna maximus, sollicitudin nunc sit amet, egestas mi. Mauris sit amet neque
                    fermentum mi dapibus feugiat. Integer lacinia, est vitae aliquet varius, diam ligula pharetra purus, non egestas lacus tellus eu nulla. Proin non turpis at lectus 
                    porttitor venenatis.<br/><br/>

                    Nunc malesuada enim quis augue elementum tincidunt. Praesent blandit mi a sapien tempor congue. Suspendisse egestas quam vel orci semper tempus. Pellentesque ullamcorper
                    luctus lacus, sollicitudin iaculis nisl iaculis at. Ut auctor tellus et arcu ornare pellentesque. Phasellus dictum sagittis sollicitudin. Aliquam gravida dui tortor,
                    quis eleifend nunc molestie ac. Phasellus mattis sem eu libero pretium, eget consequat leo faucibus.<br/><br/>

                    Vestibulum elementum faucibus odio non malesuada. Aenean faucibus viverra gravida. Duis volutpat porta eros, vel rhoncus libero scelerisque a. Praesent congue sapien
                    lectus, a tempor purus finibus vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lobortis elit ut finibus 
                    condimentum. In eget felis vel lorem varius fermentum. Ut congue dolor sed dui pretium, a aliquam quam scelerisque. Mauris suscipit nisl ac tellus luctus efficitur.
                    Sed bibendum metus dolor, ac consequat massa venenatis quis. Duis varius accumsan quam ac volutpat. Proin posuere, orci eget pulvinar dapibus, ex mauris consequat 
                    nisi, in lobortis risus felis sed felis. Aenean at ante lectus. Donec porta maximus ipsum vitae elementum. Sed ex nulla, congue non tempus id, dictum eu turpis.
                    Phasellus a metus facilisis, vehicula tortor at, iaculis sem.
                </p>
            </div>
        </div>
    );
}

export default About;
