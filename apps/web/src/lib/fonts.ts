import localfont from 'next/font/local';

const caskaydiaMono = localfont({
    variable: '--caskaydia-mono',
    src: [
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-ExtraLightItalic.ttf',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-SemiLight.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-SemiLightItalic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-Regular.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-Italic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-SemiBoldItalic.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/CaskaydiaMonoNerdFont-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
});

export { caskaydiaMono };
