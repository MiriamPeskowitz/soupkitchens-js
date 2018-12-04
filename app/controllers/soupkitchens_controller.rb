class SoupkitchensController < ApplicationController
  before_action :set_soupkitchen, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token
  
  def index
    @soupkitchens = Soupkitchen.all
    render json: @soupkitchens, status: 200
  end

  def new
    if logged_in?
      @soupkitchen = Soupkitchen.new
    else
      # flash.now[:notice] = "You must be logged in to add a new soupkitchen." 
      render json: {errors: @soupkitchen.errors.full_messages}, status: 400
    end 
  end

  def create 
   if logged_in? 
      @soupkitchen = Soupkitchen.new(soupkitchen_params)
    
      if @soupkitchen.save
        flash[:notice] = "${@soupkitchen.name} was successfully added to the soup kitchens list. Will you leave the first review?" 

        render json: {message: "Soupkitchen added"}, status: 200
        # redirect_to soupkitchen_path(@soupkitchen)
      else
        flash.now[:notice] = "Something went wrong"
        render json: {error: @soupkitchen.errors.full_messages}, status: 400
        # or pass it a custom message, like the string from line 23. 
      end 
    end
  end


  def show
    @soupkitchen = Soupkitchen.find(params[:id])
    render json: @soupkitchen, status: 200
  end

  def edit 
    @soupkitchen = Soupkitchen.find(params[:id])
  end

  def update
    # @soupkitchen = Soupkitchen.find(params[:id])
    @soupkitchen.update(soupkitchen_params)
    # head :no_content
    if @soupkitchen.save
      # redirect_to soupkitchen_path(@soup_kitchen), notice: "Changes to #{@soupkitchen.name} were successful." ADD JS 
    else 
      render :edit
    end 
  end 


  def destroy
    @soupkitchen.destroy
     # head :no_content
    # redirect_to @soupkitchens_path
  end 

 private
  def soupkitchen_params
    params.require(:soupkitchen).permit(:name, :address,:zipcode)
  end 

  def set_soupkitchen
    @soupkitchen = Soupkitchen.find(params[:id])
  end 


end
