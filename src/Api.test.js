import {getUsers, saveQuestion, saveQuestionAnswer, getQuestions} from "./api/api";

describe('Functions that interact with app API', () => {

    it('will correctly loads all users from Api', async() => {
        const users = await getUsers();
        expect(Object.keys(users).length).toBeGreaterThan(0)
    });

    it('will correctly loads all questions from Api', async() => {
        const questions = await getQuestions();
        expect(Object.keys(questions).length).toBeGreaterThan(0)
    });

    it('will correctly save a new question with all required parameters', async() => {
       const users = await getUsers();
       const usersIds = Object.keys(users);
       const randomUserId = usersIds[Math.floor(Math.random() * usersIds.length)]
       const randomAuthor = users[randomUserId];

       const mockQuestion = {
        optionOneText: "First mocked option",
        optionTwoText: "Second mocked option",
        author: randomAuthor.id
       }

      const question = await saveQuestion(mockQuestion)

        expect(Object.keys(question).length).toBeGreaterThan(0)
        expect(question.id).toBeDefined()
        expect(question.timestamp).toBeDefined()
        expect(question.author).toEqual(randomAuthor.id)
        expect(question.optionOne).toBeDefined()
        expect(question.optionTwo).toBeDefined()

    });

    it('will throw an error on saving a new question without all required parameters', async() => {
        const users = await getUsers();
        const usersIds = Object.keys(users);
        const randomUserId = usersIds[Math.floor(Math.random() * usersIds.length)]
        const randomAuthor = users[randomUserId];

        const mockQuestion = {
            optionOneText: "First mocked option",
            author: randomAuthor.id
        }

        await expect(saveQuestion(mockQuestion)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });

    it('will correctly save a new question answer with all required parameters', async() => {
        const users = await getUsers();
        const usersIds = Object.keys(users);
        const randomUserId = usersIds[Math.floor(Math.random() * usersIds.length)]
        const randomAuthor = users[randomUserId];

        const mockQuestion = {
            optionOneText: "First mocked option",
            optionTwoText: "Second mocked option",
            author: randomAuthor.id
        }

        const question = await saveQuestion(mockQuestion)

        expect(Object.keys(question).length).toBeGreaterThan(0)

        const questionObj = {
            authedUser: question.author,
            qid: question.id,
            answer: "optionOne"
        }

        await expect(saveQuestionAnswer(questionObj)).resolves.toBe(true)
    });

    it('will throw and error on saving a new question answer without all required parameters', async() => {
        const users = await getUsers();
        const usersIds = Object.keys(users);
        const randomUserId = usersIds[Math.floor(Math.random() * usersIds.length)]
        const randomAuthor = users[randomUserId];

        const mockQuestion = {
            optionOneText: "First mocked option",
            optionTwoText: "Second mocked option",
            author: randomAuthor.id
        }

        const question = await saveQuestion(mockQuestion)

        expect(Object.keys(question).length).toBeGreaterThan(0)

        const questionObj = {
            authedUser: question.author,
            answer: "optionOne"
        }

        await expect(saveQuestionAnswer(questionObj)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });

});