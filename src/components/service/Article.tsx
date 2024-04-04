import { Button, Trans } from '../common';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import Link from 'next/link';
interface ArticleProps {
  title: string;
  content: string;
  image: string;
  link: string;
  className?: string;
  id?: number;
  positionArticle?: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  content,
  image,
  link,
  className,
  positionArticle,
}) => {
  const [isClose, setIsClose] = useState(false);
  const handleClose = () => {
    setIsClose(true);
  };
  return (
    <div
      className={`${className} ${positionArticle} ${isClose ? 'hidden' : 'block'} mx-auto w-4/5 rounded-bl-[20px] rounded-br-[75px] rounded-tl-[75px] rounded-tr-[20px] bg-secondary pb-5 drop-shadow-lg md:w-3/5 lg:w-[350px] `}
    >
      <div className='md:h-42 md:w-42 absolute -top-20 left-0 right-0 mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-secondary p-5 shadow-custom'>
        <img src={image} alt='image' />
      </div>

      <div className='mt-12 space-y-5 px-5 pt-20 text-center'>
        <Link href={link}><h2 className='text-xl font-bold text-primary'>
          <Trans text={title} />
        </h2></Link>
        <Link href={link}>
          <p className='text-sm px-5 text-justify'>
            <Trans text={content} />
          </p></Link>
      </div>

      <Link href={link}>
        <Button
          variant='outline'
          className='mx-auto my-6 w-52'
          href={link}
        >
          <Trans text='services.article.buttonContent' />
        </Button>
      </Link>

      <div
        onClick={handleClose}
        className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-center text-xl text-secondary lg:hidden'
      >
        <IoMdCloseCircleOutline />
      </div>
    </div>

  );
};

export default Article;
