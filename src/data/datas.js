const nav = [
    {
        label: 'home',
        href: '/'
    },{
        label: 'about',
        href: '/about'
    },{
        label: 'profile',
        href: '/profile'
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

export {
    nav, signup     
}