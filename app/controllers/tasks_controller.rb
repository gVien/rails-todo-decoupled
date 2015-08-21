class TasksController < ApplicationController
  def index
    @task = Task.all
    render json: @task
  end

  def create
    # p "THE PARAMETERS ARE: #{params}"
    # puts "OKDAWOKAWKDOAWKDOKWODKAWOKo"
    # p task_params
    @task = Task.new(task: params[:task])

    if request.xhr?
      @task.save
      render json: @task
    end
  end

  def edit

  end

  def update
    @task = Task.find(params[:id])
  end

  # private
  # def task_params
  #   params.require(:task).permit(:task)
  # end
end
