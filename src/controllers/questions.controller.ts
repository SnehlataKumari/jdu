import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { QuestionsService } from 'src/services/questions.service';
import { AnswersService } from 'src/services/answer.service';

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
    const {questionId, answer} = body;
    console.log({ questionId, answer});
    const savedAnswer = await this.answerService.create({
      questionId, answer
    })
    return savedAnswer;
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