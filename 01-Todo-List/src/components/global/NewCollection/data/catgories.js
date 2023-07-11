import Design from '../../assets/design.svg';
import Rocket from '../../assets/game.svg';
import Film from '../../assets/film.svg';
import Task from '../../assets/task.svg';
import Tag from '../../assets/tag.svg'

export const categories = [
    {
        id: 1,
        title: 'Design',
        done: '0/0',
        icon: Design,
        style: 'bg-purple-400'
    },
    {
        id: 2,
        title: 'Games',
        done: '0/0',
        icon: Rocket,
        style: 'bg-sky-400'
    },
    {
        id: 3,
        title: 'Movies',
        done: '0/0',
        icon: Film,
        style: 'bg-indigo-400'
    },
    {
        id: 5,
        title: 'Tasks',
        done: '0/0',
        icon: Task,
        style: 'bg-rose-400'
    },
    {
        id: 6,
        title: 'Other',
        done: '0/0',
        icon: Tag,
        style: 'bg-gray-500'
    }
]
