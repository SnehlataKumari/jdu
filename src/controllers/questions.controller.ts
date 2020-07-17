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

  @Get()
  findAll() {
    return success('List found successfully', this.service.findAll());
  }
  
  @Post('submit-response')
  async submitResponse(@Body() body) {

    const {user, ...answers} = body;
    const questions = await Promise.all(
      Reflect.ownKeys(answers)
        .map(questionId => ({ questionId, answer: answers[questionId], ...user }))
        .filter(({ answer }) => !!answer)
        .map((question) => this.answerService.create(question))
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