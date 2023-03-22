/**
 * @jest-environment jsdom
 */
import commentCounter from './commentCounter.js';

describe('commentCounter', () => {
  test('should update the comment count', async () => {
    const comments = [{ id: 1, text: 'First comment' }, { id: 2, text: 'Second comment' }];
    const id = 123;
    const commentCounts = document.createElement('div');
    commentCounts.setAttribute('id', `commentCounts-${id}`);
    document.body.appendChild(commentCounts);

    await commentCounter(comments, id);

    expect(commentCounts.innerText).toBe(2);
  });

  test('should handle empty comments array', async () => {
    const comments = [];
    const id = 456;
    const commentCounts = document.createElement('div');
    commentCounts.setAttribute('id', `commentCounts-${id}`);
    document.body.appendChild(commentCounts);

    await commentCounter(comments, id);

    expect(commentCounts.innerText).toBe(0);
  });

  test('should handle invalid ID', async () => {
    const comments = [{ id: 1, text: 'First comment' }, { id: 2, text: 'Second comment' }];
    const id = undefined;
    const commentCounts = document.createElement('div');
    commentCounts.setAttribute('id', `commentCounts-${id}`);
    document.body.appendChild(commentCounts);

    await commentCounter(comments, id);

    expect(commentCounts.innerText).toBe(undefined);
  });
});
