import { ResourceController } from './resource.controller';
import { QuestionsService } from 'src/services/questions.service';
import { AnswersService } from 'src/services/answer.service';
export declare class QuestionsController extends ResourceController {
    private answerService;
    constructor(service: QuestionsService, answerService: AnswersService);
    findAll(): Promise<{
        message: string;
        data: any;
    }>;
    submitResponse(body: any): Promise<{
        message: string;
        data: any;
    }>;
    getQuestionsWithAnswers(): Promise<any>;
    getAllAnswers(): Promise<any[]>;
    getAnswersOfQuestion(questionId: any): Promise<{
        message: string;
        data: any;
    }>;
}
