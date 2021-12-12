import athlete from './assets/img/athlete-small.png';
import goodtimes from './assets/img/goodtimes-small.png';
import theracer from './assets/img/theracer-small.png';
import athlete2 from './assets/img/athlete2.png';
import goodtimes2 from './assets/img/good-times2.jpg';
import theracer2 from './assets/img/the-racer2.jpg';

export const MovieState = () => {
    return [
        {
            title: 'The Athlete',
            mainImg: athlete,
            secondaryImg: athlete2,
            url: '/ourwork/the-athlete',
            awards: [
                {
                    title: 'Truly A Masterpiece',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {
                    title: 'It`s OK.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
            ],
        },
        {
            title: 'Goodtimes',
            mainImg: goodtimes,
            secondaryImg: goodtimes2,
            url: '/ourwork/goodtimes',
            awards: [
                {
                    title: 'Truly A Masterpiece',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {
                    title: 'It`s OK.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
            ],
        },
        {
            title: 'The Racer',
            mainImg: theracer,
            secondaryImg: theracer2,
            url: '/ourwork/the-racer',
            awards: [
                {
                    title: 'Truly A Masterpiece',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {
                    title: 'It`s OK.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
            ],
        },
    ]
}
