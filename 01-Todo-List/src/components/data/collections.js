import Book from '../../assets/book.svg';
import Personal from '../../assets/personal.svg';
import Code from '../../assets/code.svg';
import Groceries from '../../assets/shopping.svg';

export const collections = [
    {
        id: 1,
        title: 'School',
        done: '0/0',
        icon: Book,
        style: 'bg-pink-400',
        collectionTasks: []
    },
    {
        id: 2,
        title: 'Personal',
        done: '0/0',
        icon: Personal,
        style: 'bg-teal-400',
        collectionTasks: []
    },
    {
        id: 3,
        title: 'Code',
        done: '0/0',
        icon: Code,
        style: 'bg-purple-400',
        collectionTasks: [
            { 
                id: 1689098350482, 
                taskName: "Learning JavaScript 🔥💪🏼", 
                date: "7/11/2023",
                status: true
            },
            { 
                id: 1683438350482, 
                taskName: "Learning React JS 🔥💪🏼", 
                date: "7/11/2023",
                status: true
            },
        ]
    },
    {
        id: 4,
        title: 'Groceries',
        done: '0/0',
        icon: Groceries,
        style: 'bg-yellow-600',
        collectionTasks: []
    },

];