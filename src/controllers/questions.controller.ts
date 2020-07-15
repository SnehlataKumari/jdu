import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { QuestionsService } from 'src/services/questions.service';
import { AnswersService } from 'src/services/answer.service';
import { success } from 'src/utils';

@Controller('questions')
export class QuestionsController extends ResourceController {
  constructor(
    service: QuestionsService,
    private answerService: AnswersService,
  ) {
    super(service)
  }

  @Post('submit-response')
  async submitResponse(@Body() body) {
    const questions = await Promise.all(
      Reflect.ownKeys(body)
        .map(questionId => ({ questionId, answer: body[questionId] }))
        .filter(({ answer }) => !!answer)
        .map(({questionId, answer}) => this.answerService.create({
          questionId, answer
        }))
    );
    
    return success('Answers submitted successfully', questions);
  }

  @Get('with-answers')
  async getQuestionsWithAnswers() {
    const questions = (await this.service.find({}).populate('answers'));
    const qs = questions.map(element => {
      return element.toObject({virtuals: true});
    });
    // console.log(questions);
    return qs;
  }
  
  @Get('answers')
  async getAllAnswers() {
    return (await this.answerService.find({}));
  }

  @Get('/:id/answers')
  async getAnswersOfQuestion(@Param('id') questionId) {
    return (await this.answerService.find({questionId}));
  }
}