
/* 

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
 */


/* database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        
        console.log(expenses);
    });
 */

/* database.ref('expenses').push({
    description: 'testing3',
    note: 'Can you hear me?',
    amount: 5,
    createdAt: 0
});
 */

/* const firebaseNotes = {
    notes: {
        jgpask: {
            title: 'First note!',
            body: 'This is my note'
        },
        asfdghf: {
            title: 'another note',
            body: 'Second note'
        }
    }
}; */

/* database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
    console.log('Error with data fetching', e);
});
 */

/* const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    database.ref('age').set(29);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500); */

/* database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data', e);
    });
 */

/* database.ref().set({
    name: 'Stefan Larsson',
    age: 23,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Alsike',
        country: 'Sweden'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed.', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle',
    'location/country': 'United States'
}); */

/* database.ref()
    .remove()
    .then(() => {
        console.log('Data removed successful');
    }).catch((e) => {
        console.log('This failed.', e);
    }); */