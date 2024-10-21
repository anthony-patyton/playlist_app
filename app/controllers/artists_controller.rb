class ArtistsController < ApplicationController
  before_action :set_bill_board
  before_action :set_artist, only: [ :show, :edit, :update, :destroy ]
  before_action :set_props

  def index
    @artists = @bill_board.artists

    if @artists.count == 0
      render component: "ArtistsNone", props: @props
    else
      render component: "Artists", props: { billboard: @bill_board, artists: @artists }
    end
  end

  def show
    render component: "Artist", props: @props
  end

  def new
    @artist = @bill_board.artists.new
    render component: "ArtistNew", props: @props
  end

  def create
    @artist = @bill_board.artists.new(artist_params)

    if @artist.save
      redirect_to [ @bill_board, @artist ]
      # same as redirect_to bill_board_artist_path(@billboard, @artist)
    else
      render component: "ArtistNew", props: @props
      # render :new
    end
  end

  def edit
    render component: "ArtistEdit", props: @props
  end

  def update
    if @artist.update(artist_params)
      redirect_to [ @bill_board, @artist ]
    else
      render compeont: "ArtistEdit", props: @props
      # render :edit
    end
  end

  def destroy
    @artist.destroy
    redirect_to bill_boards_path(@artist)
  end

  private

    def set_bill_board
      @bill_board = BillBoard.find(params[:bill_board_id])
    end

    def set_artist
      @artist = Artist.find(params[:id])
    end

    def set_props
      @props = { billboard: @bill_board, artist: @artist }
    end

    def artist_params
      params.require(:artist).permit(:first_name, :last_name)
    end
end
