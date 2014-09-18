class VolunteersController < ApplicationController
  # before_filter :authorize, only: [:index, :destroy]

  def index
    @volunteers = Volunteer.all
    respond_to do |format|
      format.html
      format.json { render :json => @volunteers }
    end
  end

  def new
    @volunteer = Volunteer.new
  end

  def create
    @volunteer = Volunteer.new(volunteer_params)
    if @volunteer.save
      @volunteer.event_ids = params[:volunteer][:event_ids]
      respond_to do |format|
        format.html do
          flash[:notice] = "Successfully registered."
          redirect_to volunteer_path(@volunteer)
        end
        format.json { render :json => @volunteer, :status => 201 }
      end
    else
      respond_to do |format|
        format.html { render 'new' }
        format.json { render :json => @volunteer.errors, :status => 422 }
      end
    end
  end

  def show
    @volunteer = Volunteer.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render :json => @volunteer }
    end
  end

  def update
    @volunteer = Volunteer.find(params[:id])
    if @volunteer.update(volunteer_params)
      @volunteer.event_ids = params[:volunteer][:event_ids]
      respond_to do |format|
        format.html do
          flash[:notice] = "Successfully updated."
          redirect_to volunteer_path(@volunteer)
        end
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.html { render 'show' }
        format.json { render :json => @volunteer.errors, :status => 422 }
      end
    end
  end

  def destroy
    @volunteer = Volunteer.find(params[:id])
    @volunteer.events.destroy_all
    @volunteer.destroy
    respond_to do |format|
      format.html do
        flash[:notice] = "Volunteer deleted."
        redirect_to volunteers_path
      end
      format.json { head :no_content }
    end
  end

private
  def volunteer_params
    params.require(:volunteer).permit(:name, :phone, :email)
  end
end
