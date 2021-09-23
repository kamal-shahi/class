const nav = [
    {
        label: 'home',
        href: '/'
    },{
        label: 'gallery',
        href: '/gallery'
    },{
        label: 'education',
        href: '/education'
    },{
        label: 'documents',
        href: '/documents'
    },{
        label: 'contact',
        href: '/contact'
    }
];

const signup = {
    title: 'Signup Now',
    subtitle: 'Feel free to signup',
    form: [
        {
            label: 'Email Address',
            type: 'email',
            placeholder: 'Enter Email',
            wrapperClass: 'form-group',
            className: 'form-control'
        },
        {
            label: 'Password',
            type: 'password',
            placeholder: 'Password Here',
            wrapperClass: 'form-group',
            className: 'form-control'
        },{
            label: 'Check me out',
            type: 'checkbox',
            checked: true,
            wrapperClass: 'form-check',
            className: 'col-2 form-check-input'
        },{
            label: 'Submit',
            type: 'submit',
            wrapperClass: 'col-12 p-0 mt-3',
            className: 'btn btn-primary'
        }
    ]
}

const users =  {
        name: 'Kamal Shahi',
        image: 'https://thevakundo.com//backgrounds/1611312700933-ac.jpg',
        email: 'kamal@gmail.com',
        password: 'password'
    };

const carousel = [
    'https://thevakundo.com//backgrounds/1611312700933-ac.jpg', 
    'https://thevakundo.com//backgrounds/1611479425119-mbmc-banner.jpg',
    'https://thevakundo.com//backgrounds/1625301081704-Banner1.jpg',
    'https://thevakundo.com//courses/1611746600693-be-civil.jpg'
]

const intro = {
  title: 'My Intro',
  description: 'ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
};

const insp = {
    title: 'My Inspiration',
    documents: [
        {
            img: 'https://image.cnbcfm.com/api/v1/image/106869987-1618795805885-gettyimages-1312630032-sb3_5306_2021041510407047.jpeg?v=1618795885&w=1600&h=900',
            desc: 'football is my favourite game'
        },{
            img: 'https://image.cnbcfm.com/api/v1/image/106869987-1618795805885-gettyimages-1312630032-sb3_5306_2021041510407047.jpeg?v=1618795885&w=1600&h=900',
            desc: 'football is my favourite game'
        }, {
            img: 'https://image.cnbcfm.com/api/v1/image/106869987-1618795805885-gettyimages-1312630032-sb3_5306_2021041510407047.jpeg?v=1618795885&w=1600&h=900',
            desc: 'football is my favourite game'
        }, {
            img: 'https://image.cnbcfm.com/api/v1/image/106869987-1618795805885-gettyimages-1312630032-sb3_5306_2021041510407047.jpeg?v=1618795885&w=1600&h=900',
            desc: 'football is my favourite game'
        }
    ]
  };

  const gallery = [
    'https://thevakundo.com//backgrounds/1611312700933-ac.jpg', 
    'https://thevakundo.com//backgrounds/1611479425119-mbmc-banner.jpg',
    'https://thevakundo.com//backgrounds/1625301081704-Banner1.jpg',
    'https://thevakundo.com//courses/1611746600693-be-civil.jpg',
    'https://thevakundo.com//backgrounds/1611312700933-ac.jpg', 
    'https://thevakundo.com//backgrounds/1611479425119-mbmc-banner.jpg',
    'https://thevakundo.com//backgrounds/1625301081704-Banner1.jpg',
    'https://thevakundo.com//courses/1611746600693-be-civil.jpg',
    'https://thevakundo.com//backgrounds/1611312700933-ac.jpg', 
    'https://thevakundo.com//backgrounds/1611479425119-mbmc-banner.jpg',
    'https://thevakundo.com//backgrounds/1625301081704-Banner1.jpg',
    'https://thevakundo.com//courses/1611746600693-be-civil.jpg',
    'https://thevakundo.com//backgrounds/1611312700933-ac.jpg', 
    'https://thevakundo.com//backgrounds/1611479425119-mbmc-banner.jpg',
    'https://thevakundo.com//backgrounds/1625301081704-Banner1.jpg',
    'https://thevakundo.com//courses/1611746600693-be-civil.jpg'
  ]
export {
    nav, signup, carousel, intro, insp, gallery, users     
}