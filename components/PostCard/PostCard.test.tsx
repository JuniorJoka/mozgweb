import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Default } from './PostCard.stories';

describe('Post Card', () => {
  test('should render ', () => {
    render(<Default />);

    expect(screen.getByPlaceholderText(/title/i)).toBeVisible();
  });

  test('title should accept input', () => {
    const inputValue = 'Some Random String';
    render(<Default />);
    const input = screen.getByPlaceholderText(/title/i) as HTMLInputElement;

    userEvent.type(input, inputValue);

    expect(input.value).toEqual(inputValue);
  });

  test('title should truncate long strings', () => {
    const inputValue =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus rerum itaque temporibus debitis, magnam ab facere modi omnis eum dolores soluta explicabo nulla culpa eius amet sint? Laborum quasi, suscipit error veritatis accusantium officiis dignissimos fugiat, corporis eos dolor alias eligendi? Deserunt sed qui amet, hic magni molestias quidem alias ad rem aut voluptatem aperiam perferendis illum nesciunt maiores dolorum adipisci voluptates delectus. Quis qui quaerat aliquid fugiat aperiam alias rem at voluptates eligendi provident vero accusantium, eveniet sed maiores temporibus obcaecati nemo hic laborum sapiente harum sequi corporis. Dignissimos hic illum atque ut repellat, cum corporis dolore. Quis placeat, laudantium suscipit minima excepturi quidem error esse exercitationem dolore accusantium modi commodi ea expedita culpa blanditiis optio amet eveniet debitis nesciunt quaerat odio rem itaque quia eum. Voluptates similique eius iure accusantium eos molestiae, culpa atque nulla? Voluptatibus similique ipsum beatae nisi vero soluta magnam voluptas? Ullam, necessitatibus! Enim, error modi? Quidem, voluptas explicabo distinctio dolorem, qui nulla suscipit enim veniam tempora dolores, sed facilis animi. Ex harum eum magni rerum, odit cupiditate voluptate consequatur maiores, delectus libero ea autem ipsum accusantium consequuntur quas doloribus in. Ipsum nam quod est voluptatibus velit dolor possimus explicabo! Ipsam minus ad quisquam animi, voluptatem eaque sunt earum commodi debitis, et excepturi cum? Dolorum nostrum architecto obcaecati quos consequatur! Dignissimos voluptatum, eum tempora harum labore nihil eaque quas animi! Voluptatibus labore alias tenetur sint distinctio eaque illum possimus totam esse quia reiciendis qui id iure ea, explicabo minus. Dolorum aspernatur illum ratione, possimus deserunt impedit ullam accusamus explicabo doloremque provident tempore debitis ut corrupti magni. Eveniet neque commodi ad. Laudantium qui hic voluptatum perferendis dolorem, consequuntur nemo nam nesciunt ipsum eius ea illo sunt natus voluptatem repellat eos laborum ab quo nisi quae voluptas! Adipisci obcaecati vel aspernatur quasi consequatur blanditiis rerum reprehenderit optio facere minima! Voluptatum, placeat? Illo mollitia quae voluptatibus cupiditate. Earum iusto nemo expedita voluptates omnis nesciunt alias, minima illo assumenda, laborum beatae suscipit? Libero saepe, ducimus sequi incidunt provident velit, sit culpa qui porro eum eaque voluptatum doloremque mollitia harum inventore ipsum non unde veritatis nam at ex quae sint amet. Deleniti dignissimos, repellendus dolores placeat minus, esse asperiores dolore, sed impedit ex perferendis delectus accusantium tenetur quas quidem vero hic! Maiores molestias excepturi harum exercitationem optio fugiat molestiae enim? Ab dicta reiciendis odit doloribus alias provident voluptates omnis quis hic dignissimos officia, debitis, quae consequatur cumque perspiciatis natus.';
    const inputValueTruncated = inputValue.slice(0, 300);
    render(<Default />);
    const input = screen.getByPlaceholderText(/title/i) as HTMLInputElement;

    userEvent.type(input, inputValue);

    expect(input.value).not.toEqual(inputValue);
    expect(input.value).toEqual(inputValueTruncated);
  });
});
