class EventsController < ApplicationController
  # before_filter :authorize, except: :index

  def index
    @events = Event.all
    @volunteers = Volunteer.all
    respond_to do |format|
      format.html
      format.json { render :json => @events }
    end
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      respond_to do |format|
        format.html do
          flash[:notice] = "Event created!"
          redirect_to event_path(@event)
        end
        format.json { render :json => @event, :status => 201 }
      end
    else
      respond_to do |format|
        format.html { render 'new' }
        format.json { render :json => @event.errors, :status => 422 }
      end
    end
  end

  def show
    @event = Event.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render :json => @event }
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      @event.volunteers << Volunteer.find(params[:event][:volunteer_ids].first) if params[:event][:volunteer_ids]
      respond_to do |format|
        format.html do
          flash[:notice] = "Event updated!"
          redirect_to event_path(@event)
        end
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.html { render 'show' }
        format.json { render :json => @event.errors, :status => 422 }
      end
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.volunteers.destroy
    @event.destroy
    respond_to do |format|
      format.html do
        flash[:notice] = "Event deleted."
        redirect_to events_path
      end
      format.json { head :no_content }
    end
  end

private
  def event_params
    params.require(:event).permit(:name, :location, :date)
  end
end
